import React from 'react';
import './Project.scss';
function Project(){
    return (
        <div class="container">
        <div class="gallery-container h-2">
            <div class="gallery-item">
                <div class="image"><img src="https://source.unsplash.com//1600x900/?rainforest" alt="rainforest"/></div>
                <div class="text">Rain Forest</div>
            </div>
        </div>
        <div class="gallery-container h-3">
            <div class="gallery-item">
                <div class="image"><img src="https://source.unsplash.com//1600x900/?Venice" alt="Venice"/></div>
                <div class="text">Venice</div>
            </div>
        </div>
        <div class="gallery-container h-2">
            <div class="gallery-item">
                <div class="image"><img src="https://source.unsplash.com//1600x900/?waterfall" alt="waterfall"/></div>
                <div class="text">Waterfall</div>
            </div>
        </div>
        <div class="gallery-container h-3">
            <div class="gallery-item">
                <div class="image">
                    <a href="resume.pdf" download="Arnav's Resume">
                    <img src="https://source.unsplash.com//1600x900/?tropicalforest"
                        alt="tropicalforest"/>
                        {/* <!-- <img src="resuem-overlay.png" -->
                        alt="tropicalforest"> */}
                    </a>
                    </div>
                <div class="text">Tropica Forest</div>
            </div>
        </div>
        <div class="gallery-container h-4">
            <div class="gallery-item">
                <div class="image"><img src="https://source.unsplash.com//1600x900/?forest" alt="forest"/></div>
                <div class="text">Forest</div>
            </div>
        </div>
        <div class="gallery-container h-3">
            <div class="gallery-item">
                <div class="image"><img src="https://source.unsplash.com//1600x900/?city" alt="city"/></div>
                <div class="text">City</div>
            </div>
        </div>
        <div class="gallery-container h-2">
            <div class="gallery-item">
                <div class="image"><img src="https://source.unsplash.com//1600x900/?mountains" alt="mountains"/></div>
                <div class="text">Mountains</div>
            </div>
        </div>
        <div class="gallery-container w-2">
            <div class="gallery-item">
                <div class="image"><img src="https://source.unsplash.com//1600x900/?mountainview" alt="MountainsView"/>
                </div>
                <div class="text">Mountain View</div>
            </div>
        </div>
    </div>
    )
}

export default Project;