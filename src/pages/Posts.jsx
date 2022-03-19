import React, {useEffect, useRef, useState} from "react";
import "../styles/App.css"
import PostLists from "../components/PostLists";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader"
import { getPageCount } from "../util/pages";
import {useFetching} from "../hooks/useFetching"
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObsever";
import MySelect from "../components/UI/select/MySelect";


function Posts () {

  const [posts, setPosts] = useState ([])
  const [filter, setFilter] = useState({sort:'' , query: ''})
  const [modal, setModal] = useState (false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(5)
  const [page, setPage] = useState(1)
  const lastElement = useRef()

  const [fetchPosts, isPostLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers['x-total-count'];
    setPosts([...posts, ...response.data]);
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

  const changePage = (page) => {
    setPage(page)
  }
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

   return (
    <div className="App">
      <MyButton
      style={{margin:'10px 0 5px 0', padding:'10px'}}
      onClick={() => setModal(true)}
      >Authorization</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0'}}></hr>
      <PostFilter limit={limit} setLimit={setLimit} filter={filter} setFilter={setFilter}/>
      {postError && <h1 style={{margin:'10px 0 10px 0'}}>Error: ${postError}</h1>}
      {isPostLoading &&
      <div style={{display:'flex', marginTop:'25px', justifyContent:"center"}}><Loader/></div>
      }
      <PostLists remove={removePost} posts={sortedAndSearchedPosts} title= "Post Lists" />
      <div ref={lastElement} style={{background:'white', marginBottom: '30px', height:'20px'}}/>
      <Pagination changePage={changePage} page={page} totalPages={totalPages}/>
      </div>
      )
    }

export default Posts;
