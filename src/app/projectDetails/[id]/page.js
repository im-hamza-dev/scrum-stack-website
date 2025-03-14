"use client"
import React from 'react';
import { FaTwitter, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import DetailPageBanner from '../../components/DetailPageBanner/DetailPageBanner';
import Image from "next/image";
import { projects } from '../../lib/helper';
import { useParams } from 'next/navigation';

const Page = () => {
    const { id } = useParams();
    const project = projects[Number(id)];
    return (
        <div>
            <DetailPageBanner bgImage={"/projectBg.jpg"} title={"Project Details"} pageLink={"/projectDetails"} />

            <div className="max-w-7xl mt-20 mb-10  mx-auto px-4 w-10/12 py-12">
                <Image
                    src="/smart-visions1.jpg"
                    alt="Team Working"
                    width={800}
                    height={125}
                    className="w-full mb-14 rounded-md"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-3xl sm:text-4xl text-secondary font-bold">Here to Know About This Project</h2>
                        <p className="text-gray-500 text-lg leading-8">
                            {project.overview}
                        </p>

                        <h3 className="text-3xl sm:text-4xl text-secondary font-bold">Project Challenges</h3>
                        <p className="text-gray-500 text-lg leading-8">
                            {project.challenges.map((challenge, index) => (
                                <span key={index}>
                                    {challenge}
                                    {index !== project.challenges.length - 1 && ", "}<br/>
                                </span>
                            ))}
                        </p>

                        <h3 className="text-3xl sm:text-4xl text-secondary font-bold">{project.name}</h3>
                        <p className="text-gray-500 text-lg leading-8">
                        {project.features.map((feature, index) => (
                                <span key={index}>
                                    {feature}
                                    {index !== project.features.length - 1 && ", "}<br/>
                                </span>
                            ))}  </p>

                        <h3 className="text-3xl sm:text-4xl text-secondary font-bold">Tech Stack</h3>
                        <p className="text-gray-500 text-lg leading-8">
                            {project.techStack}
                        </p>
                    </div>

                    {/* Sidebar */}
                    <div className="bg-[#F5F5F5] p-6 md:p-10 rounded-lg text-secondary w-full md:w-4/5 mx-auto">
                        <ul className="space-y-4">
                            <li><span className="text-gray-400">Date:</span> <br /> <span className="font-bold">10 January, 2023</span></li>
                            <li><span className="text-gray-400">Client:</span> <br /> <span className="font-bold">Kodesolution Ltd</span></li>
                            <li><span className="text-gray-400">Website:</span> <br /> <a href="#" className="text-primary font-bold">{project.liveDemo}</a></li>
                            <li><span className="text-gray-400">Location:</span> <br /> <span className="font-bold">New York, USA</span></li>
                            <li><span className="text-gray-400">Value:</span> <br /> <span className="font-bold">$12,367</span></li>
                        </ul>

                        <div className="flex flex-wrap gap-4 mt-6 text-white">
                            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-gray-800 transition-all">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-gray-800 transition-all">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-gray-800 transition-all">
                                <FaPinterestP size={18} />
                            </a>
                            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-gray-800 transition-all">
                                <FaInstagram size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between flex-wrap items-center border-y mt-12 py-4">
                    <button className="flex items-center space-x-4 text-secondary hover:text-gray-800">
                        <span className="text-2xl border border-black p-2 rounded-full hover:bg-primary hover:text-white hover:border-transparent">←</span>
                        <span className='text-gray-500'>Previous</span>
                    </button>
                    <button className="flex items-center space-x-4 text-secondary hover:text-gray-800">
                        <span className='text-gray-500'>Next</span>
                        <span className="text-2xl border border-black p-2 rounded-full hover:bg-primary hover:text-white hover:border-transparent">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
