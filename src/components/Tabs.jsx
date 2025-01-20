export function Tabs(props){
    const { todos,selectedTab,setSelectedTab } = props //destructuring
    const tabs = ['All','Open','Completed']
    return(
        <nav className="tab-container">
            {tabs.map((tab,tabIndex)=>{

                const numOfTasks = tab === 'All' ? //if tab is all -> we will display the whole length of todos
                    todos.length : 
                    tab === 'Open' ? // if tab is open -> filter out the ones which are marked complete:false from the todos array
                    todos.filter(val => !val.complete).length
                    : todos.filter(val => val.complete).length


                return(
                    <button onClick={()=>{
                        setSelectedTab(tab)
                    }} key={tabIndex} className={"tab-button "+(tab===selectedTab ? ' tab-selected':' ')}>
                        <h4>{tab} <span>[{numOfTasks}]</span></h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}