import React from "react";
import { Link } from "react-router-dom";
import { Heart, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
export default function ErrorPage({
  status = 404,
  message = "Page not found",
}) {
  const title =
    status === 404
      ? "Page Not Found"
      : status === 500
      ? "Server Error"
      : "Oops!";
  const subtitle =
    message ||
    (status === 404
      ? "We couldn't find the page you're looking for."
      : "Something went wrong on our side.");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="max-w-3xl w-full bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-6 items-center"
      >
        {/* Left: Illustration / Icon */}
        <div className="flex-shrink-0 flex items-center justify-center w-40 h-40 rounded-xl bg-pink-100/70">
          <div className="text-pink-600">
            {/* Big friendly icon */}
            <Heart size={64} className="mx-auto" />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="rounded-full bg-pink-50 p-2 border border-pink-100">
              <AlertCircle size={22} className="text-pink-500" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
                {title}
              </h1>
              <p className="text-sm text-gray-500 mt-1">Error {status}</p>
            </div>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3 justify-center md:justify-start">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-500 transition"
            >
              Go home
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:shadow-sm transition"
            >
              Try again
            </button>

            <Link
              to="/contact"
              className="mt-2 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-pink-600 border border-pink-100 hover:bg-pink-50 transition"
            >
              Contact me
            </Link>
          </div>

          <div className="mt-6 text-xs text-gray-400">
            <span>Tip: </span>
            <span>
              If you followed a link, it might be outdated. Refresh or return to
              the homepage.
            </span>
          </div>
        </div>
      </motion.div>

      {/* Cute bottom credit / signature */}
      <div className="absolute bottom-6 w-full flex items-center justify-center">
        <div className="text-xs text-gray-400 flex items-center gap-2">
          <span>Made with</span>
          <Heart size={14} className="text-pink-500" />
          <span>by you</span>
        </div>
      </div>
    </div>
  );
}
