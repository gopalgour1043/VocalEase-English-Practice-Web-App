import React from 'react';
import { auth } from '../Components/firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import backgroundImage from "../IMAGES_&_LOGOS/bg-1.jpg";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useCentralData } from '../Context/CentralData';
import Spinner from "../Components/Spinner"

const Login = () => {
    const { 
        isSignUp, setIsSignUp,
        email, setEmail,
        password, setPassword,
        firstName, setFirstName,
        lastName, setLastName,
        error, setError,
        isLoggedIn, setIsLoggedIn,
        loading, setloading
    } = useCentralData();

    const navigate = useNavigate();
    
    const handleSignIn = async (e) => {
        e.preventDefault();
        setloading(true);  
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true);  
            toast.success("Logged in successfully");
            navigate('/'); 
        } catch (err) {
            setError("Failed to sign in: " + err.message);
        } finally {
            setloading(false);  
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setloading(true);  
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsSignUp(false);  
            toast.success("Registered successfully");
        } catch (err) {
            setError("Failed to sign up: " + err.message);
        } finally {
            setloading(false);  
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen h-screen bg-cover bg-center" style={{
            backgroundImage: `url(${backgroundImage})`
        }}>
            <div className="bg-slate-200 p-8 rounded-lg shadow-md w-full max-w-lg">
                {error && <p className="text-red-600 text-center mb-4">{error}</p>}

                
                {loading ? (
                    <div className="flex justify-center items-center h-96"> 
                        <Spinner />
                    </div>
                ) : (
                    !isSignUp ? (
                        <div>
                            <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

                            {/* Sign In Form */}
                            <form onSubmit={handleSignIn} className="space-y-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-600 text-white p-2 rounded"
                                >
                                    Sign In
                                </button>
                            </form>

                            {/* Switch to Sign Up */}
                            <div className="text-center mt-4">
                                <button
                                    onClick={() => setIsSignUp(true)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Don't have an account? Sign Up
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

                            {/* Sign Up Form */}
                            <form onSubmit={handleSignUp} className="space-y-4">
                                <input
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="First Name"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Last Name"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-600 text-white p-2 rounded"
                                >
                                    Sign Up
                                </button>
                            </form>

                            {/* Switch to Sign In */}
                            <div className="text-center mt-4">
                                <button
                                    onClick={() => setIsSignUp(false)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Already have an account? Sign In
                                </button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Login;
