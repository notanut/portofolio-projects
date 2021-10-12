import React, { useState } from "react";
import Projects from './Projects'
import Categories from './Categories'
import datas from './data'

const allCategories = ['all', ...new Set(datas.map((data) => data.category))]


function App() {
  const [projectData, setProjectData] = useState(datas)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setProjectData(datas)
      return
    }
    const newDatas = datas.filter((item) => item.category === category)
    setProjectData(newDatas)
  }



  return (
    <main>
      <section>
        <div className="title">
          <h1>PROJECTS</h1>
          <p>by categories</p>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Projects datas={projectData}></Projects>
      </section>
    </main>
  );
}

export default App;
