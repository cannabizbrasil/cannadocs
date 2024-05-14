"use client";


import Video from 'next-video';




export default function VideoCannaDocs() {
    return (
        <div className="bg-gradient-to-br from-gray-50 from-0% to-white from-10%">
            <div className="relative isolate ">
                <div className="mx-auto max-w-9xl px-8 lg:px-0  py-24 ">
                    <div className="overflow-hidden bg-black rounded-3xl shadow-2xl">
                        <Video src='https://stream.mux.com/kA7tUEeh7RFr3bFn026b4GLNk00UPWSWtQ8G00VsYdNqyo.m3u8' />
                    </div>
                </div>
            </div>
        </div>
    )
}