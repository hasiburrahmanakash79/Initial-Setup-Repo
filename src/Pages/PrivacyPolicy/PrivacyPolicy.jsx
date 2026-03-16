import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SectionTitle from "../../components/SectionTitle";

const PrivacyPolicy = () => {
  const [title, setTitle] = useState("Top 10 places of Colorado");
  const [description, setDescription] = useState(
    "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
  );

  const modules = {
    toolbar: [
      ["bold", "italic"],
      ["link"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  const handleSave = () => {
    console.log("Policy Saved:", { title, description });
    alert("Policy saved successfully!");
  };

  const handleCancel = () => {
    setTitle("Top 10 places of Colorado");
    setDescription(
      "I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
    );
  };

  return (
    <div className="">
      <SectionTitle
        title="Policies"
        description="Manage your app's Privacy Policy."
      />

      <div className="px-6">
        <div
          className="p-6 rounded-xl bg-white border border-gray-200"
        >
          {/* Policy Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Policy title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-base outline-none transition-colors"
              placeholder="Enter policy title"
            />
          </div>

          {/* Description */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <div className=" overflow-hidden bg-white">
              <ReactQuill
                theme="snow"
                value={description}
                onChange={setDescription}
                modules={modules}
                className="min-h-[80px]"
              />
            </div>
          </div>

          {/* Cancel & Save Buttons (exact match) */}
          <div className="flex justify-end gap-4 mt-10">
            <button
              onClick={handleCancel}
              className="px-3 py-2 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-2 bg-[#0C4E96] hover:bg-[#09427e] text-white font-medium rounded-xl transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;