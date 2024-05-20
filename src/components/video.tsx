"use client";


import Video from 'next-video';
import VideoIntro from '/videos/cannadocs_intro.mp4'





export default function VideoCannaDocs() {
    return (
        <div className="bg-gradient-to-br from-gray-50 from-0% to-white from-10%">
            <div className="relative isolate ">
                <div className="mx-auto max-w-9xl px-8 lg:px-0  py-24 ">
                    <div className="overflow-hidden bg-black rounded-3xl shadow-2xl">
                        <Video src={VideoIntro}
                            poster='https://image.mux.com/BWYyeuQC02Ii51wgJ5hbNdoj01glr9snS73s1XZyr02z200/thumbnail.png?width=1920&height=1080&time=19'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}