import React from 'react'
import type { Route } from '../+types/root';
import { useLocation } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Visualizer" },
  ];
}

function visualizerId() {
    const location = useLocation()
    const { initialImage, initialRender, name} = location.state
    return (
        <section>
            <h1>{name || "untitled Project"}</h1>

            <div className='visualizer'>
                {initialImage && (
                    <div className='image-container'>
                        <h2>Source Image</h2>
                        <img src={initialImage} alt={"source"} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default visualizerId
