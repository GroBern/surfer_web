import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Blog = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("blog.titlePage");
    }, [t]);

    const blogsData = t("blog.items", { returnObjects: true });

    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogsData.slice(indexOfFirstBlog, indexOfLastBlog);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            {/* Header */}
            <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
                style={{ backgroundImage: `url(${t("blog.headerImage")})` }} id='Header'>
                <Navbar />
                <div className='container text-center mx-auto py-4 px-4 sm:px-6 md:px-20 lg:px-32 text-white'>
                    <h2 className='font-[montserrat] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[100px] inline-block max-w-full sm:max-w-3xl font-bold pt-18 mt-16 sm:mt-8 md:-mt-2'>
                        {t("blog.title")}
                    </h2>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-6xl mx-auto px-4 my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentBlogs.map((blog, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={idx}
                                className="group relative overflow-hidden"
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <div className={`overflow-hidden shadow-lg flex flex-col justify-between ${isEven ? "bg-white text-[#0a67b3]" : "bg-[#0a67b3] text-white"} transition duration-300 hover:shadow-xl`}>
                                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                                    <div className="p-4 flex flex-col gap-2">
                                        <span className="text-xs text-gray-400">{blog.date || "27. June 2023 / Surfing"}</span>
                                        <h2 className="font-semibold text-lg">{blog.title}</h2>
                                        <p className="text-sm leading-snug">{blog.description.split(" ").slice(0, 50).join(" ")}...</p>
                                    </div>
                                    <div className={`px-4 py-2 text-sm font-medium ${isEven ? "bg-[#0a67b3] text-white" : "bg-white text-[#0a67b3]"}`}>
                                        <a href={`/blog/${blog.id}`} className="hover:underline">{t("blog.readMore")}</a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-10 gap-2">
                    {[...Array(Math.ceil(blogsData.length / blogsPerPage))].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => paginate(index + 1)}
                            className={`w-9 h-9 rounded-full text-sm font-medium transition-all duration-200 ${currentPage === index + 1 ? "bg-[#0a67b3] text-white shadow-md" : "bg-white text-[#0a67b3] border border-[#0a67b3] hover:bg-[#0a67b3] hover:text-white"}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
