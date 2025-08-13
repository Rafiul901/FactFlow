import React from 'react';

const Section2 = () => {
    return (
 <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold  mb-6">Why Choose FactFlow?</h2>
        <p className="text-lg -300 mb-12 max-w-3xl mx-auto">
          FactFlow is not just another discussion platform — it's a trusted space where knowledge, facts, and communities come together. Here's why thousands choose FactFlow every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0f2e54] border border-blue-500 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Verified Information</h3>
            <p className="text-gray-300">
              Our strict moderation and fact-checking ensure that users get reliable and verified information across every topic.
            </p>
          </div>

          <div className="bg-[#0f2e54] border border-blue-500 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Active Community</h3>
            <p className="text-gray-300">
              Engage with experts, enthusiasts, and curious minds. Our community thrives on respectful debates and meaningful discussions.
            </p>
          </div>

          <div className="bg-[#0f2e54] border border-blue-500 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Secure & Private</h3>
            <p className="text-gray-300">
              We prioritize your privacy. All your data is securely stored, and you have full control over your profile and content.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Section2;