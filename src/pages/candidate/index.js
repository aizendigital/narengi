import React, { PureComponent } from "react";

class Place extends PureComponent {
    renderFarm = items => {
        return items.map((item, index) => {
            return (
                <div key={index}>
                    <div className="article-image" id={"image_" + index}>
                        
                    </div>
                    <div className="article-text">
                        <p>{item.text}</p>
                    </div>
                </div>
            );
        });
    };
    render() {
        return (
           <div>
               YoYoYo
           </div>
        );
    }
}

export default Place;
