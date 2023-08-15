import "../../css/post.css";
import "../../css/common.css";
import PostCard from "../commondcomponent/postCard";
function PostPageIndex() {
  return (
    <>
      <div class="postContainerTitle">
        <div class="filter">
          <div class="filterBox">
            <p>recent</p>
            <p>popular</p>
            <select>
              <option value="">weekly</option>
              <option value="">monthly</option>
            </select>
          </div>
          <hr />
        </div>
        <h1>Post</h1>
        <button class="purpleBtn writeBtn">Write</button>
      </div>
      <div class="postListBox">
            {/* <!-- 포스트라이드 --> */}
            <div class="postSlide">
              <ul class="postList">
                {/* <!-- 포스트카드 --> */}
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              <PostCard/>
              </ul>
            </div>
          </div>
    </>
  );
}
export default PostPageIndex;
