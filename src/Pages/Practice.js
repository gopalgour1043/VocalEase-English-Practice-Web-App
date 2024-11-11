import React, { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../Components/firebase";
import { useCentralData } from "../Context/CentralData";
import backgroundImage2 from "../IMAGES_&_LOGOS/bg-2.jpg";
import toast from "react-hot-toast";
import Spinner from "../Components/Spinner"; // Spinner component for loading

const Practice = () => {
  const [videos, setVideos] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(null); // Track specific video being deleted

  const videoRef = useRef();
  const mediaRecorderRef = useRef();
  const recordedChunks = useRef([]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUserId(user.uid);
        fetchVideos(user.uid);
      }
    });
  }, []);

  const fetchVideos = async (userId) => {
    setLoadingFetch(true);
    try {
      const listRef = ref(storage, `videos/${userId}/`);
      const res = await listAll(listRef);
      const videoURLs = await Promise.all(res.items.map((item) => getDownloadURL(item)));
      setVideos(videoURLs);
    } catch (error) {
      toast.error("Error fetching videos");
      console.error("Error fetching videos: ", error);
    } finally {
      setLoadingFetch(false);
    }
  };

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks.current, { type: "video/webm" });
      setVideoBlob(blob);
      recordedChunks.current = [];
      stopStream();
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const stopStream = () => {
    const tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
  };

  const uploadVideo = async () => {
    if (!videoBlob || !currentUserId) return;

    setUploading(true);
    try {
      const videoRef = ref(storage, `videos/${currentUserId}/${Date.now()}.webm`);
      await uploadBytes(videoRef, videoBlob);
      fetchVideos(currentUserId);
      setVideoBlob(null);
      setvideocount((prev) => prev + 1)
      toast.success("Video Uploaded");
    } catch (error) {
      toast.error("Error uploading video");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const deleteVideo = async (videoUrl) => {
    setLoadingDelete(videoUrl);
    try {
      const videoRef = ref(storage, videoUrl);
      await deleteObject(videoRef);
      fetchVideos(currentUserId);
      setvideocount((prev) => prev - 1)
      toast.success("Video Deleted");
    } catch (error) {
      toast.error("Error deleting video");
      console.error(error);
    } finally {
      setLoadingDelete(null);
    }
  };

  const { topic, setvideocount } = useCentralData();

  return (
    <div
      className="p-4 flex flex-col items-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="m-4 p-4 bg-slate-200 rounded-md border-2 border-black font-bold text-lg md:text-2xl text-center">
        <p>Your Topic Is: {topic}</p>
      </div>

      <div className="w-full max-w-sm sm:max-w-md">
        <video ref={videoRef} autoPlay muted className="w-full h-auto rounded shadow-lg"></video>
        <div className="mt-4 flex justify-center">
          {!recording ? (
            <button
              onClick={startRecording}
              className="px-4 py-2 bg-green-500 text-white rounded w-full sm:w-auto"
            >
              Start Recording
            </button>
          ) : (
            <button
              onClick={stopRecording}
              className="px-4 py-2 bg-red-500 text-white rounded w-full sm:w-auto"
            >
              Stop Recording
            </button>
          )}
        </div>
        {videoBlob && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={uploadVideo}
              disabled={uploading}
              className={`px-4 py-2 rounded w-full sm:w-auto ${uploading ? "bg-gray-500" : "bg-blue-500 text-white"
                }`}
            >
              {uploading ? <Spinner /> : "Upload Video"}
            </button>
          </div>
        )}
      </div>

      <div className="mt-12 w-full max-w-6xl">
        <h2 className="text-lg md:text-2xl font-bold mb-4 text-center underline">
          Uploaded Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loadingFetch ? (
            <Spinner />
          ) : (
            videos.map((url, idx) => (
              <div key={idx} className="bg-white p-2 rounded shadow-lg border relative">
                <video
                  src={url}
                  controls
                  className="w-full h-auto rounded-md border-2 border-black"
                ></video>
                <button
                  onClick={() => deleteVideo(url)}
                  className="px-3 py-1 mt-3 w-full bg-red-600 text-white rounded"
                >
                  {loadingDelete === url ? <div className="flex justify-center items-center h-5">
                    <Spinner />
                  </div> : "Delete"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Practice;
