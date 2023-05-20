// import { Axios } axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {
  formInputs,
  selectData,
  textAreaData,
  inputData,
  selectData1,
} from './formdata'
import axios from 'axios'

const Form = () => {
  const [checkboxState, setCheckboxState] = useState(true)
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    position: '',
    level: '',
    role: '',
    size: '',
    industry: '',
    whoYouAre: '',
    listOfService: '',
    describeYourOffer: '',
    ListOfPastSuccess: '',
    previousStatement: '',
    averageSalesCycle: '',
    peopleInYourOrganisation: '',
    howManyProspects: '',
    howManyLeads: '',
    howManyQualifiedLeads: '',
    teamCloseRate: '',
    averageDealSize: '',
    prospectContactInfo: '',
    contacting: [],
  })

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value

    // if ('checked' in e.target) {
    //   this.setState({ [e.target.name]: e.target.checked })
    // }

    // if (e.target.checked === checkboxState) {
    //   (newData.e.target.id)
    // }

    // if (e.target.checked) {
    //   newData[e.target.id].push(e.target.value)
    // }
    setData(newData)
    console.log(e.target.id, e.target.checked, newData[e.target.id])
    console.log(newData)
  }

  const postRequest = function(e) {
    e.preventDefault()
    axios
      .post('https://businessapi-production.up.railway.app/api/v1/webhook/', {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        email: data.email,
        companyName: data.companyName,
        position: data.position,
        level: data.level,
        role: data.role,
        size: data.size,
        industry: data.industry,
        whoYouAre: data.whoYouAre,
        listOfService: data.listOfService,
        describeYourOffer: data.describeYourOffer,
        ListOfPastSuccess: data.ListOfPastSuccess,
        previousStatement: data.previousStatement,
        averageSalesCycle: data.averageSalesCycle,
        peopleInYourOrganisation: data.peopleInYourOrganisation,
        howManyProspects: data.howManyLeads,
        howManyLeads: data.howManyLeads,
        howManyQualifiedLeads: data.howManyQualifiedLeads,
        teamCloseRate: data.teamCloseRate,
        averageDealSize: data.averageDealSize,
        prospectContactInfo: data.prospectContactInfo,
      })
      .then((response) => {
        console.log(response.data)
      })
  }

  return (
    <section className='form-section'>
      <form onSubmit={(e) => postRequest(e)}>
        <div className='form-box'>
          <div className='form-basic'>
            {formInputs.map(({ id, title, type, placeHolder, name }) => {
              return (
                <label key={id}>
                  <p>{title}</p>
                  <input
                    className='input'
                    onChange={(e) => handle(e)}
                    type={type}
                    id={name}
                    value={data.name}
                    placeholder={placeHolder}
                    required
                  />
                </label>
              )
            })}
          </div>
          <div className='form-basic-2'>
            <h2>Tell us a little about your ideal prospect.</h2>
            <p className='form-sub'>
              This info will be used to generate your Prospect Report & outreach
              messages in real-time during our demo.
            </p>

            {selectData.map(({ id, question, name1, options }) => {
              return (
                <div className='select' key={id}>
                  <p className='select-label'>{question}</p>
                  <select
                    onChange={(e) => handle(e)}
                    id={name1}
                    value={data.name1}
                  >
                    {options.map((opt) => (
                      <option>{opt}</option>
                    ))}
                  </select>
                </div>
              )
            })}
          </div>

          {/* // */}

          {/* <section className='section-form--2'> */}
          <div>
            <h2 className='second-form--1'>
              Tell us a little more about yourself professionally.
            </h2>
            <p className='second-form-text--1'>
              Don't overthink your answers! This is just a demo.
            </p>
            {textAreaData.map(({ id, name, title, sample, placeHolder }) => {
              return (
                <label className='textarea-label'>
                  <p className='text-title'>{title}</p>
                  <span>{sample}</span>
                  <textarea
                    className='text-area-form'
                    onChange={(e) => handle(e)}
                    type='text'
                    id={name}
                    value={data.name}
                    //   value=''
                    placeholder={placeHolder}
                    required
                  ></textarea>
                </label>
              )
            })}
          </div>
          <div>
            <h2 className='second-form--2'>
              Tell us about your biz dev operations
            </h2>
            <p className='second-form-text--2'>
              This doesn't need to be exact. We'll use this information to
              create your business case.
            </p>
            {inputData.map(({ id, name, title, sample, placeHolder }) => {
              return (
                <label className='textarea-label'>
                  <p className='text-title'>{title}</p>
                  <span>{sample}</span>
                  <input
                    className='text-area-form'
                    onChange={(e) => handle(e)}
                    type='number'
                    id={name}
                    value={data.name}
                    placeholder={placeHolder}
                    required
                  />
                </label>
              )
            })}
            {selectData1.map(({ id, name1, question, options }) => {
              return (
                <>
                  <p className='text-title title-check'>{question}</p>
                  <div className='checkbox'>
                    {options.map((opt) => (
                      <div>
                        <input
                          className='thecheckbox'
                          onChange={(e) => handle(e)}
                          id={name1}
                          value={opt}
                          type='checkbox'
                          required
                        />
                        <label className='checkbox-label'>{opt}</label>
                      </div>
                    ))}
                  </div>
                </>
              )
            })}
          </div>
          {/* </section> */}
        </div>
        <button className='btn-hero'>Submit</button>
      </form>
    </section>
  )
}

export default Form
