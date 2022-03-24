import StoryView from "./NavMid/StoryView";
import CreatePost from "./NavMid/CreatePost";
import ViewPosts from "./NavMid/ViewPosts";


const Main = (props) => {

    return (
        <div className="body-nav-center">
            {/* <StoryView /> */}

            <CreatePost />

            {/* <ViewPosts /> */}

        </div>
    )
}

export default Main;