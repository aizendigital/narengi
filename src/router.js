import React from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import Loading from "components/loading";

const Home = Loadable({
    loader: () => import("pages/home"),
    loading: Loading,
    modules: ["homeChunk"],
});
const Job = Loadable({
    loader: () => import("pages/job"),
    loading: Loading,
    modules: ["jobChunk"],
});
const Candidate = Loadable({
    loader: () => import("pages/candidate"),
    loading: Loading,
    modules: ["candidateChunk"],
});
const Report = Loadable({
    loader: () => import("pages/report"),
    loading: Loading,
    modules: ["reportChunk"],
});
const Interview = Loadable({
    loader: () => import("pages/interview"),
    loading: Loading,
    modules: ["interviewChunk"],
});
const Setting = Loadable({
    loader: () => import("pages/setting"),
    loading: Loading,
    modules: ["settingChunk"],
});



const RouterComponent = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/job" exact component={Job} />
            <Route path="/candidate" exact component={Candidate} />
            <Route path="/report" exact component={Report} />
            <Route path="/interview" exact component={Interview} />
            <Route path="/setting" exact component={Setting} />
        
        </Switch>
    );
};
export default RouterComponent;
