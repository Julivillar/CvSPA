export const ProjectCard = () => {
    return (
        <>
            <article className="projectCardContainer">
                <img src="8707972a759975b07d188308c948cc27.jpg" alt="" />
                <div className="projectInfoContainer">
                    <div>

                        <h3>Project Title</h3>
                        <p> Project Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae consectetur voluptas deserunt voluptatem, odio voluptate maiores expedita autem dolore vel earum! Numquam laborum, expedita ducimus tempore sapiente quo saepe iure?</p>
                        <a href="">Go to GITHUB repository</a>
                    </div>
                    <div>
                        <h4>Tech</h4>
                        <span> <img src="public\vite.svg" alt="" className="imgIcon" /> </span> <label htmlFor="Name">Julián Villar Cebrián</label>
                        <span> <img src="public\vite.svg" alt="" className="imgIcon" /> </span> <label htmlFor="Name">Julián Villar Cebrián</label>
                        <span> <img src="public\vite.svg" alt="" className="imgIcon" /> </span> <label htmlFor="Name">Julián Villar Cebrián</label>
                        <span> <img src="public\vite.svg" alt="" className="imgIcon" /> </span> <label htmlFor="Name">Julián Villar Cebrián</label>

                    </div>
                </div>
            </article>
        </>
    )
}