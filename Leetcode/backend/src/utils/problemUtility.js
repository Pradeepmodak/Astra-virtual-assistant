const axios=require('axios');

const getLanguageById=(lang)=>{
    const language={
        "c++":"54",
        "java":"62",
        "javascript":"63"
    }
    return language[lang.toLowerCase()]||null;
}
const submitBatch=async(submissions)=>{
const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
  params: {
    base64_encoded: 'true'
  },
  headers: {
    'x-rapidapi-key': '2b17bda379msh3966f924de1f222p10f7b6jsn2682072d9964',
    'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    submissions: submissions
  }
};

async function fetchData() {
	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}
return await fetchData();
}
module.exports={getLanguageById,submitBatch};