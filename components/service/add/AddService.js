"use client";
import React, { useState, useRef } from "react";
import {
  PlusIcon,
  ArrowUpTrayIcon,
  ListBulletIcon,
  BoltIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] bg-gray-50 rounded-lg border border-gray-200"></div>
  ),
});

const AddService = () => {
  // State for form fields
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [price, setPrice] = useState("");
  const [concepts, setConcepts] = useState("");
  const [duration, setDuration] = useState("");
  const fileInputRef = useRef(null);

  // Handle tag input
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag && !tags.includes(newTag) && tags.length < 20) {
        setTags([...tags, newTag]);
        setTagInput("");
      }
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Rich text editor modules
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  // Process multiple files
  const handleFiles = (files) => {
    const imageFiles = files.filter(
      (file) => file.type.startsWith("image/") || file.type === "video/mp4"
    );

    if (imageFiles.length === 0) return;

    const newImagesPromises = imageFiles.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({
            src: reader.result,
            type: file.type,
            name: file.name,
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newImagesPromises).then((newImages) => {
      setUploadedImages((prevImages) => [...prevImages, ...newImages]);
    });
  };

  // Remove a specific image
  const removeImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="w-full max-w-7xl flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        <h1 className="text-center text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold font-['Source_Serif_4']">
          What services you provide?
        </h1>

        <div className="w-full p-4 sm:p-6 md:p-8 lg:p-12 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-zinc-400 flex flex-col justify-start items-end gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Multiple Image Upload Area */}
          <div className="w-full flex flex-col gap-2.5">
            <div className="w-full p-2.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-900 flex flex-col gap-2.5">
              <div
                className={`w-full p-8 sm:p-12 md:p-16 lg:p-24 bg-emerald-50/30 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-900/20 flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 ${
                  dragActive ? "bg-emerald-50/60" : ""
                }`}
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
              >
                {uploadedImages.length > 0 ? (
                  <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {uploadedImages.map((image, index) => (
                        <div key={index} className="relative group">
                          {image.type.startsWith("image/") ? (
                            <img
                              src={image.src}
                              alt={`Uploaded ${index + 1}`}
                              className="w-full h-40 object-cover rounded-lg"
                            />
                          ) : (
                            <video
                              src={image.src}
                              className="w-full h-40 object-cover rounded-lg"
                              controls
                            />
                          )}
                          <button
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md opacity-70 hover:opacity-100 transition"
                          >
                            <XMarkIcon className="w-4 h-4 text-gray-900" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => fileInputRef.current.click()}
                        className="px-4 py-2 bg-gray-900 text-white rounded-lg"
                      >
                        Add More
                      </button>
                      <button
                        onClick={() => setUploadedImages([])}
                        className="px-4 py-2 border border-gray-900 rounded-lg"
                      >
                        Remove All
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="p-4 bg-gray-900 rounded-[200px] flex justify-center items-center cursor-pointer"
                      onClick={() => fileInputRef.current.click()}
                    >
                      <ArrowUpTrayIcon className="w-6 h-6 text-white" />
                    </div>

                    <div className="w-full flex flex-col gap-4 text-center">
                      <div>
                        <span className="text-zinc-700 text-lg sm:text-xl md:text-2xl font-normal font-['Inter']">
                          Drag and drop images, or{" "}
                        </span>
                        <span
                          className="text-gray-900 text-lg sm:text-xl md:text-2xl font-bold font-['Inter'] cursor-pointer"
                          onClick={() => fileInputRef.current.click()}
                        >
                          Browse
                        </span>
                      </div>
                      <div className="text-zinc-700 text-sm sm:text-base font-normal font-['Inter']">
                        Minimum 1600px width recommended. Max 10MB each (20MB
                        for videos)
                      </div>
                    </div>

                    <div className="w-full flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
                      <div className="flex flex-col gap-6 sm:gap-10">
                        <div className="flex items-center gap-2 text-zinc-700 text-sm sm:text-base font-normal font-['Inter']">
                          <PhotoIcon className="w-5 h-5 text-zinc-700" />
                          High resolution images (png, jpg, gif)
                        </div>
                        <div className="flex items-center gap-2 text-zinc-700 text-sm sm:text-base font-normal font-['Inter']">
                          <BoltIcon className="w-5 h-5 text-zinc-700" />
                          Videos (mp4)
                        </div>
                      </div>

                      <div className="flex flex-col gap-6 sm:gap-10">
                        <div className="flex items-center gap-2 text-zinc-700 text-sm sm:text-base font-normal font-['Inter']">
                          <PhotoIcon className="w-5 h-5 text-zinc-700" />
                          Animated gifs
                        </div>
                        <div className="flex items-center gap-2 text-zinc-700 text-sm sm:text-base font-normal font-['Inter']">
                          <ListBulletIcon className="w-5 h-5 text-zinc-700" />
                          Only upload media you own the rights to
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*,video/mp4"
                  className="hidden"
                  onChange={handleFileChange}
                  multiple
                />
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="w-full flex flex-col gap-10">
            {/* Title and Tags */}
            <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-10">
              {/* Title Field */}
              <div className="w-full flex-1 flex flex-col gap-2.5">
                <div className="w-full p-5 bg-emerald-50/30 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-900/20 flex items-center">
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-transparent text-zinc-700 text-base sm:text-lg font-normal font-['Inter'] placeholder-zinc-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Tags Field */}
              <div className="w-full flex-1 flex flex-col gap-2.5">
                <div className="w-full p-5 bg-emerald-50/30 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-900/20 flex flex-wrap items-center gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 rounded-full px-3 py-1 text-sm flex items-center gap-2"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    placeholder={
                      tags.length === 0 ? "Add Tags (maximum 20)" : ""
                    }
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    className="flex-1 min-w-[100px] bg-transparent text-zinc-700 text-base sm:text-lg font-normal font-['Inter'] placeholder-zinc-700 focus:outline-none"
                    disabled={tags.length >= 20}
                  />
                </div>
              </div>
            </div>

            {/* New Fields: Price, Concepts/Revisions, Project Duration */}
            <div className="w-full flex flex-col sm:flex-row gap-6 sm:gap-10">
              {/* Price Field */}
              <div className="w-full flex-1 flex flex-col gap-2.5">
                <label className="text-gray-900 text-base sm:text-lg font-medium font-['Inter']">
                  Price
                </label>
                <div className="w-full p-5 bg-emerald-50/30 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-900/20 flex items-center">
                  <span className="text-gray-900 mr-2 font-medium">$</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-transparent text-zinc-700 text-base sm:text-lg font-normal font-['Inter'] placeholder-zinc-700 focus:outline-none"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              {/* Concepts and Revisions Field */}
              <div className="w-full flex-1 flex flex-col gap-2.5">
                <label className="text-gray-900 text-base sm:text-lg font-medium font-['Inter']">
                  Concepts and Revisions
                </label>
                <div className="w-full p-5 bg-emerald-50/30 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-900/20 flex items-center">
                  <input
                    type="text"
                    placeholder="e.g. 2 concepts, 3 revisions"
                    value={concepts}
                    onChange={(e) => setConcepts(e.target.value)}
                    className="w-full bg-transparent text-zinc-700 text-base sm:text-lg font-normal font-['Inter'] placeholder-zinc-700 focus:outline-none"
                  />
                </div>
              </div>

              {/* Project Duration Field */}
              <div className="w-full flex-1 flex flex-col gap-2.5">
                <label className="text-gray-900 text-base sm:text-lg font-medium font-['Inter']">
                  Project Duration
                </label>
                <div className="w-full p-5 bg-emerald-50/30 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-gray-900/20 flex items-center">
                  <input
                    type="text"
                    placeholder="e.g. 2 weeks"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full bg-transparent text-zinc-700 text-base sm:text-lg font-normal font-['Inter'] placeholder-zinc-700 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Description Field with Rich Text Editor */}
            <div className="w-full flex flex-col gap-2.5">
              <div>
                <span className="text-gray-900 text-lg sm:text-xl font-medium font-['Inter'] leading-snug">
                  Description{" "}
                </span>
                <span className="text-rose-500 text-lg sm:text-xl font-medium font-['Inter'] leading-snug">
                  *
                </span>
              </div>

              <div className="w-full p-0.5 rounded-lg outline outline-2 outline-offset-[-2px] outline-gray-200 flex flex-col">
                {/* Rich Text Editor */}
                <div className="quill-wrapper" style={{ height: "300px" }}>
                  {typeof window !== "undefined" && (
                    <ReactQuill
                      theme="snow"
                      value={description}
                      onChange={setDescription}
                      modules={modules}
                      className="bg-gray-50 rounded-bl-lg rounded-br-lg h-full"
                      placeholder="Tell us about your work..."
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Add More Button */}
          <div className="flex items-center gap-2.5">
            <div className="p-5 bg-gray-900 rounded-[200px] flex items-center cursor-pointer">
              <PlusIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
          <button className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-900 flex justify-center items-center">
            <span className="text-center text-gray-900 text-lg sm:text-xl font-bold font-['Arial'] leading-normal">
              Save as draft
            </span>
          </button>

          <button className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-gray-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-900 flex justify-center items-center cursor-pointer">
            <span className="text-center text-white text-lg sm:text-xl font-bold font-['Arial'] leading-normal">
              Continue
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddService;
