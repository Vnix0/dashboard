import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective,Page,Search,Inject, Toolbar} from '@syncfusion/ej2-react-grids'
 import {contextMenuItems, orderGrid, employeesGrid, employeesData} from '../data/dummy'
import {Header}from '../components'

function Employees() {
  return (
    <div className='margin-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="page" title="Employees"/>
      <GridComponent
      id="employeescomp"
      dataSource={employeesData}
      allowPaging={true}
      allowSorting={true}
      toolbar={['Search']}
      width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) =>( <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page , Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees