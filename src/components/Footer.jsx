import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* 分隔線 */}
            <hr className="my-6 w-full border-t-2 border-gray-400 rounded-sm opacity-100" />

            
            <footer className="footer text-white py-6">
                <div className="flex justify-evenly items-center w-full">

                    {/* 版權與其他資訊 */}
                    <div className="footer-copyright">
                        <p className="text-center mt-4 text-gray-300">
                            Copyright © {new Date().getFullYear()}  By CHUN. All Rights Reserved. From CHUNSHOP
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}