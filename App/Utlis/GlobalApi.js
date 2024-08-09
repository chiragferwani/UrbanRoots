import { gql, request } from 'graphql-request/build/entrypoints/main'

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/clzirgr65029107urzhzq0o9b/master"

const getSlider=async()=>{
const query = gql`
query GetSliders {
    slidersurbanroots {
      id
      name
      image {
        url
      }
    }
  }
`
const result = await request(MASTER_URL, query);
return result
}

const getCategories=async()=>{
  const query = gql`
  query GetSliders {
    categoryurbanroots {
      id
      name
      icon {
        url
      }
    }
  }
  `
const result = await request(MASTER_URL, query);
return result
}

const getBusinessList=async()=>{
  const query = gql`
  query getBusinessList {
    businessListsurbanroots {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  `
const result = await request(MASTER_URL, query);
return result
}

const getBusinessListByCategory=async(category)=>{
  const query = gql`
  query getBusinessList {
    businessListsurbanroots(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
return result
}

const createBooking=async(data)=>{
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {
        bookingStatus: booked, 
        businessList: {
          connect: {id: "`+data.businessid+`"}
        }, 
        date: "`+data.date+`", 
        time: "`+data.time+`", 
        userEmail: "`+data.userEmail+`", 
        userName: "`+data.userName+`"
      }
    ) {
      id
    }
    publishManyBookingsurbanroots(to: PUBLISHED) {
      count
    }
  }
  `
const result = await request(MASTER_URL, mutationQuery);
return result
}

export default {
    getSlider,
    getCategories,
    getBusinessList,
    getBusinessListByCategory, 
    createBooking
}




