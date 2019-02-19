import React, { PureComponent } from "react";
import DefaultLayout from "layouts/defaultLayout";
import PageSection from "components/pageSection";
import HomeTopCover from "./homeTopCover";

const cover = {
    image: "cover-placeholder.jpg",
    title: "Yohooooooooo Yohooooooooo Yohooooooooo Yohooooooooo Yohooooooooo",
};

class Home extends PureComponent {
    render() {
        return (
            <DefaultLayout inner={false}>
                <HomeTopCover image={cover.image} text={cover.title} />
                <PageSection bg="#fff" padding="20" sectionPadding="30">
                    <HomeTopCover image={cover.image} text={cover.title} />
                </PageSection>
                <HomeTopCover image={cover.image} text={cover.title} />
            </DefaultLayout>
        );
    }
}
export default Home;
