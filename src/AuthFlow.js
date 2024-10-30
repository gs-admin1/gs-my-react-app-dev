import React, { useState } from 'react';
import { 
  Mail, Lock, Eye, EyeOff, ArrowRight, 
  ChevronLeft, Brain, Dumbbell, Apple, 
  Github
} from 'lucide-react';

const Logo = () => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <Brain className="h-12 w-12 text-red-600" />
      <Dumbbell className="h-8 w-8 absolute -bottom-2 -right-2 text-red-600" />
    </div>
    <h1 className="text-2xl font-bold text-gray-900 mt-4">FitAI</h1>
    <p className="text-sm text-gray-600">Your AI Fitness Coach</p>
  </div>
);

const SocialButtons = () => (
  <div className="grid grid-cols-2 gap-4">
    <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
      <Apple className="h-5 w-5" />
      <span className="text-sm font-medium">Apple</span>
    </button>
    <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
      <img src="/api/placeholder/20/20" alt="Google" className="h-5 w-5" />
      <span className="text-sm font-medium">Google</span>
    </button>
  </div>
);

const Divider = () => (
  <div className="relative my-8">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-200"></div>
    </div>
    <div className="relative flex justify-center text-sm">
      <span className="px-4 bg-white text-gray-500">or continue with</span>
    </div>
  </div>
);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-sm mx-auto space-y-8">
        <Logo />

        <div className="space-y-6">
          <SocialButtons />
          <Divider />

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Email</label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Password</label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-12 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm text-red-600 hover:text-red-700">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              <span>Sign In</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button className="text-red-600 font-medium hover:text-red-700">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-sm mx-auto space-y-8">
        <Logo />

        <div className="space-y-6">
          <SocialButtons />
          <Divider />

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Email</label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Password</label>
              <div className="relative">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-10 pr-12 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <button type="button" className="text-red-600 hover:text-red-700">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-red-600 hover:text-red-700">
                  Privacy Policy
                </button>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              <span>Create Account</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button className="text-red-600 font-medium hover:text-red-700">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

const ForgotPasswordPage = () => (
  <div className="min-h-screen bg-white px-6 py-12">
    <div className="max-w-sm mx-auto space-y-8">
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Reset Password</h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email and we'll send you instructions to reset your password
        </p>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Email</label>
          <div className="relative">
            <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition-colors"
        >
          Send Reset Link
        </button>
      </form>

      <p className="text-center text-sm text-gray-600">
        Remember your password?{' '}
        <button className="text-red-600 font-medium hover:text-red-700">
          Sign in
        </button>
      </p>
    </div>
  </div>
);

export default function AuthFlow() {
  return (
    <div>
      <LoginPage />
      <RegisterPage />
      <ForgotPasswordPage />
    </div>
  );
}
