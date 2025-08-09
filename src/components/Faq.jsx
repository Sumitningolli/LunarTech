import React, { useState } from "react";

const faqData = [
  {
    question: "What is our return policy for subscription services?",
    answer:
      "We offer a flexible return policy for our subscription services. If you are unsatisfied with the service, you can request a cancellation within the first 7 days of your subscription for a full refund. After this period, cancellations will not be eligible for a refund but can be stopped from the next billing cycle",
  },
  {
    question: "How long does it take to see results after paying the fee?",
    answer:
      "The duration to see results depends on the service or program you choose. Generally, clients start noticing improvements within 4-6 weeks. However, for long-term success, consistency and active engagement are essential.",
  },
  {
    question: "What kind of support do we provide for growing startups?",
    answer:
      "We provide comprehensive support for growing startups, including mentorship, business strategy guidance, technical consulting, and marketing assistance. Our team ensures that startups receive the necessary resources and expertise to scale effectively.",
  },
  {
    question: "What is the biggest challenge businesses face today?",
    answer:
      "One of the biggest challenges businesses face today is adapting to rapid technological advancements and changing market demands. Staying competitive requires continuous innovation, strong digital presence, and customer-centric strategies.",
  },
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-4/5 m-auto my-20 p-4">
      <h1 className="text-2xl font-semibold text-gray-600 mb-6">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center bg-white/50 px-4 py-3 rounded-lg cursor-pointer"
            onClick={() => toggleFaq(index)}
            style={{ cursor: "pointer" }}
          >
            <h2 className="text-lg font-medium text-gray-700">
              {faq.question}
            </h2>
            <span className="text-xl text-gray-500">
              {openFaq === index ? "-" : "+"}
            </span>
          </div>
          {openFaq === index && (
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openFaq === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="p-4 text-gray-400">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
