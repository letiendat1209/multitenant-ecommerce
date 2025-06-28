"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Page = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Banner giới thiệu */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
        >
            <h1 className="text-4xl font-bold">Về Chúng Tôi</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Chúng tôi cung cấp giải pháp thương mại đa cửa hàng hiện đại, giúp các chủ shop
                    xây dựng và phát triển thương hiệu online nhanh chóng.
            </p>
            <Image
            src="/about-banner.avif" 
            alt="Giới thiệu"
            width={1200}
            height={400}
            className="rounded-xl mx-auto object-cover shadow-lg"
            />
        </motion.div>

        {/* Sứ mệnh + hình */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <Image
                src="/mission.avif" // <-- Thay ảnh minh họa sứ mệnh
                alt="Sứ mệnh"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-md max-h-[400px]"
            />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <h2 className="text-2xl font-semibold mb-4">Sứ mệnh của chúng tôi</h2>
            <p className="text-gray-700 text-lg">
                Xây dựng nền tảng bán hàng hiệu quả, đơn giản và dễ mở rộng, giúp mọi thương hiệu – từ nhỏ đến lớn – đều có thể phát triển bền vững trên môi trường số.
            </p>
            </motion.div>
        </div>

        {/* Giá trị cốt lõi */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center"
        >
            <h2 className="text-2xl font-bold">Giá trị cốt lõi</h2>
            <ul className="grid md:grid-cols-2 gap-6 text-left text-gray-700 max-w-4xl mx-auto">
            <li className="border-l-4 border-blue-500 pl-4">Khách hàng là trung tâm</li>
            <li className="border-l-4 border-blue-500 pl-4">Minh bạch & trung thực</li>
            <li className="border-l-4 border-blue-500 pl-4">Đổi mới liên tục</li>
            <li className="border-l-4 border-blue-500 pl-4">Chất lượng dịch vụ vượt mong đợi</li>
            </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-100 p-8 rounded-xl text-center space-y-4"
        >
            <h3 className="text-2xl font-semibold">Bạn là chủ cửa hàng?</h3>
            <p className="text-gray-600 max-w-md mx-auto">
            Tham gia hệ thống bán hàng đa tenant của chúng tôi để phát triển thương hiệu của bạn ngay hôm nay!
            </p>
            <Link href="/sign-up">
                    <Button
                        variant="elevated"
                        color="primary"
                        size="lg"
                    >
                        Đăng ký cửa hàng
                    </Button>
            </Link>
        </motion.div>
        </div>
    );
};

export default Page;
