import React from "react";

export default function EmailContactForm() {
    return (
        <>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <div className="mb-6">
                <button
                    type="submit"
                    className="h-10 px-5 text-white-100 bg-emerald-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-emerald-800 "
                >
                    Send
                </button>
            </div>
        </>
    )
}