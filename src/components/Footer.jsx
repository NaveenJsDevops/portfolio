import React, { useState } from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub, AiFillIdcard } from "react-icons/ai";
import emailjs from "emailjs-com"; // Assuming you are using EmailJS

const Footer = () => {
  const [rating, setRating] = useState(0); // For storing the rating value
  const [email, setEmail] = useState(""); // For storing the email input
  const [description, setDescription] = useState(""); // For storing the description


  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || !email) {
      alert("Please provide a rating and email.");
      return;
    }

    // Sending the rating and email to your mail using EmailJS
    const templateParams = {
      email: email,
      rating: rating,
      description: description, // Add the description here
    };

    emailjs
      .send(
        "service_ranbj5f", // Your EmailJS service ID
        "template_i3sh6mw", // Your EmailJS template ID
        templateParams,
        "ClcHapW0440qJyYRX", // Your EmailJS user ID
        console.log(templateParams)// Check the output
      )
      .then(
        (response) => {
          alert("Rating submitted successfully!");
          setRating(0); // Reset rating after submission
          setEmail(""); // Reset email after submission
          setDescription(""); // Reset email after Description
        },
        (err) => {
          alert("Error sending email. Please try again.");
        }
      );
  };

  return (
    <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
      <div
        className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `}
      >
        <div className={`${layout.sectionInfo} flex flex-col space-y-4`}>
          <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-teal-700 dark:hover:text-teal-300">
            {aboutMe.name}
          </h2>
          <p className="text-xl font-medium text-gray-800 font-poppins dark:text-white hover:text-teal-700 dark:hover:text-teal-300">
            {aboutMe.phone}
          </p>
          <p className="text-xl font-medium text-gray-800 font-poppins dark:text-white hover:text-teal-700 dark:hover:text-teal-300">
            {aboutMe.email}
          </p>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5">
            {aboutMe.tagLine}
          </p>
          <div className="flex flex-row mt-4">
            {socialMedia.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                index={index}
                className="text-white mr-5 text-[25px] hover:text-teal-200"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2">
            <a href={resumeLink} target="_blank">
              <Button
                styles="mt-3 mr-5 inline-flex items-center justify-center"
                text="Resume"
                icon={AiFillIdcard}
              />
            </a>
            <a href={repoLink} target="_blank">
              <Button
                styles="mt-3 inline-flex items-center justify-center"
                text="Star"
                icon={AiFillGithub}
              />
            </a>
          </div>
          <div className="mt-6">
            <br></br>
            <p className="text-xl font-medium text-gray-800 font-poppins dark:text-white">
              Rate us:
            </p>
            <div className="flex space-x-2 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`text-3xl ${
                    rating >= star ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => handleRating(star)}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Email input and submit button */}
            <form onSubmit={handleSubmit} className="mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-md w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              />
              {/* Textarea for description */}
              <textarea
                placeholder="Write a description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 rounded-md w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 mt-4"
                rows="4" // You can adjust the number of rows for the height of the text area
              />       
              <div className="flex justify-end">
              <Button
                type="submit" // This will now submit the form
                styles="mt-6 inline-flex items-center justify-center"
                text="Submit"
              />
            </div>
            </form>
          </div>
        </div>
        <div className="md:ml-auto mt-5 md:mt-5">
          <img
            src={profilePic}
            alt="Naveen Kumar"
            className="w-[400px] h-[400px] border-2 border-teal-400 relative z-[5] rounded-full"
          />
        </div>
      </div>
      <div className="text-center font-poppins font-medium text-dimWhite text-xs sm:text-sm pb-4">
        <p>Made with 💙 by Naveen Kumar & the Open Source Community</p>
      </div>
    </footer>
  );
};

export default Footer;
