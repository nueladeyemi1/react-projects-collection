'use client'
// export default function Dashboard() {
//   return <div>This is Dashboard</div>
// }

// Goschool.tsx
import ClassAttendance from '@/ui/dashboard-ui/classattendance'
import Classcalendar from '@/ui/dashboard-ui/classcalendar'
import Classdetails from '@/ui/dashboard-ui/classdetails'
import Classinfo, { ClassData } from '@/ui/dashboard-ui/classinfo'
import ClassPerformance, { Data } from '@/ui/dashboard-ui/classperformance'
import React, { useState } from 'react'
// import Classinfo, { ClassData } from "./Classinfo";
// import Classdetails from "./Classdetails";
// import Classcalendar from "./Classcalendar";
// import Classperformance, { Data } from "./Classperfomance";
// import Classattendance from "./Classattendance";

function Goschool() {
  const Classes: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<
      'details' | 'calendar' | 'performance' | 'attendance' | null
    >('details')

    const showClassDetails = () => {
      setActiveComponent('details')
    }

    const showClassCalendar = () => {
      setActiveComponent('calendar')
    }

    const showPerformance = () => {
      setActiveComponent('performance')
    }

    const showAttendance = () => {
      setActiveComponent('attendance')
    }

    const classData: ClassData = {
      name: 'Class 1A',
      links: [
        {
          title: 'Details',
          url: '#classDetails',
        },
        {
          title: 'Calendar',
          url: '#classCalendar',
        },
        {
          title: 'Performance',
          url: '#classPerformance',
        },
        {
          title: 'Attendance',
          url: '#classAttendance',
        },
      ],
    }
    const enrolledStudents: number = 54
    const attendance: number = 42
    const clsDescription: string =
      'This is the science division class for senior secondary students.This is a class managed by Arowosegbe Vincent'
    const enrollStudents: string = 'Enrolled Students'
    const clsCategory: string = 'Alpha'
    const tdAttendance: string = 'Today Attendance'
    const clsTeacher: string = 'Class Teacher'
    const tchrName: string = 'Arowosegbe Adeoba V'
    const ReAssignment: string = 'Reassign Teacher'
    const clsCaptain: string = 'Class Captain'
    const classDescription: string = 'Class Description'
    const captName: string = 'Captain Chukwudi Okoro'
    const topStudent: string = 'Top Student'
    const classCategory: string = 'Class Category'
    const studentName: string = 'Chukwwudi Okoro'
    const studentList: string = 'Student List'
    const Number: string = 'No'
    const allEvents: string = 'All Events'
    const totalEvents: number = 11
    const currentEvents: string = 'Current Events'
    const totalCurrentEvents: number = 3
    const upComingEvents: string = 'UpComing Events'
    const totalupComingEvents: number = 6
    const completedEvents: string = 'CompletedEvents'
    const clsTimeTable: string = 'Class Timetable'
    const upCominEvents: string = 'Upcoming Events'
    const clsExcursion: string = 'Class Excursion'
    const subTaken: string = 'Subject Taken'
    const subTakenNo: number = 15
    const subinthecls: string = 'Subject in this Class'
    const submaths: string = 'Mathematics'
    const firstTerm: string = 'First Term'
    const secondTerm: string = 'Second Term'
    const thirdTerm: string = 'Third Term'
    const filetSub: string = 'Filter Subject'
    const perfData: string = 'Perfomance Data'
    const physics: string = 'Physics'
    const zoology: string = 'Zoology'
    const biology: string = 'Biology'
    const studList: string = 'Student List'
    const studName: string = 'Student Name'

    const clsExcursionpara: string =
      "A visit to the popular Zuma Rock,Located in Niger state.The class students will travel together in pairs.it's going to be so much fun!"

    const data: Data[] = [
      {
        name: 'W1',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W3',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W6',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W9',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W12',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W1',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W3',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W6',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W9',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
      {
        name: 'W12',
        total: Math.floor(Math.random() * 5000) + 1000,
      },
    ]

    return (
      <div>
        <div className='p-4 mt-0'>
          <Classinfo
            classData={classData}
            showClassDetails={showClassDetails}
            onShowCalendar={showClassCalendar}
            onShowPerfomance={showPerformance}
            onShowAttendance={showAttendance}
            activeComponent={activeComponent}
          />
          {activeComponent === 'details' && (
            <Classdetails
              clsTeacher={clsTeacher}
              enrolledStudents={enrolledStudents}
              attendance={attendance}
              clsDescription={clsDescription}
              clsCategory={clsCategory}
              tchrName={tchrName}
              ReAssignment={ReAssignment}
              clsCaptain={clsCaptain}
              captName={captName}
              topStudent={topStudent}
              studentName={studentName}
              studentList={studentList}
              Number={Number}
              enrollStudents={enrollStudents}
              tdAttendance={tdAttendance}
              classDescription={classDescription}
              classCategory={classCategory}
              onClick={() => {}}
              // filter={filter}
              // setFilter={setFilter}
            />
          )}
          {activeComponent === 'calendar' && (
            <Classcalendar
              allEvents={allEvents}
              totalEvents={totalEvents}
              currentEvents={currentEvents}
              totalCurrentEvents={totalCurrentEvents}
              upComingEvents={upComingEvents}
              totalupComingEvents={totalupComingEvents}
              completedEvents={completedEvents}
              clsTimeTable={clsTimeTable}
              upCominEvents={upCominEvents}
              clsExcursion={clsExcursion}
              clsExcursionpara={clsExcursionpara}
            />
          )}
          {activeComponent === 'performance' && (
            <ClassPerformance
              subTaken={subTaken}
              subTakenNo={subTakenNo}
              subInTheClass='Subject in this Class'
              subMaths='Mathematics'
              data={data}
              firstTerm={firstTerm}
              secondTerm={secondTerm}
              thirdTerm={thirdTerm}
              filetSub={filetSub}
              perfData={perfData}
              physics={physics}
              zoology={zoology}
              biology={biology}
              studList={studList}
              studName={studName}
            />
          )}
          {activeComponent === 'attendance' && (
            <ClassAttendance
              subTaken='Subject Taken'
              subTakenNo={15}
              subInTheClass='Subject in this Class'
              subMaths='Mathematics'
              data={data}
              firstTerm='First Term'
              secondTerm='Second Term'
              thirdTerm='Third Term'
              filetSub='Filter Subject'
            />
          )}
        </div>
      </div>
    )
  }

  return <Classes />
}

export default Goschool
