import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({changePage, page, totalPages}) => {
    let pagesArray = usePagination(totalPages)
    return (
        <div className="page__wrapper">
        {pagesArray.map(p => 
        <span
        className={p === page ?"page page__current" :"page"}
        onClick={() => changePage(p)}
        key={p}
        >{p}</span>)}
      </div>
    )

}

export default Pagination;