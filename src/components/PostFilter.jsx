import React from "react";
import { classNamesShape } from "react-transition-group/cjs/utils/PropTypes";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import classes from "./UI/select/MySelect.module.css"

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
    return (
        <div>
            <MyInput 
      placeholder='Search...'
      value={filter.query}
      onChange={e => setFilter({...filter, query: e.target.value})}
      />
      <div className={classes.select}>
      <MySelect
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      defaultValue='Sorting'
      options={[
        {value: 'title', name: 'By titile'},
        {value: 'body', name: 'By description'}
      ]}
      />
      <MySelect
      value={limit}
      defaultValue='Number of posts'
      onChange={value => setLimit(value)}
      options={[
        {value:5, name:'5'},
        {value:10, name:'10'},
        {value:25, name:'25'},
        {value:-1, name:'Show all'}
      ]}
      />
      </div>
        </div>
    )
}

export default PostFilter;