import { axios } from '@/utils/request'

const api = {
    issuePre: '/api/issue'
}

export function addIssueAPI(data){
    return axios({
        url:`${api.issuePre}/add`,
        method: 'POST',
        data
    })
}

export function deleteIssueAPI(data) {
    return axios({
        url: `${api.issuePre}/delete`,
        method: 'DELETE',
        params:data
    })
}

export function updateIssueAPI(data){
    return axios({
        url: `${api.issuePre}/update`,
        method: 'POST',
        data
    })
}


export function searchIssueAPI(data) {
    return axios({
        url: `${api.issuePre}/search`,
        method: 'GET',
        params:data,
    })
}

/**
 * 获取所有的在本平台创建的issue，以及手动拉取过的github上的issue
 * @param data projectId
 * @returns {*}
 */
export function getIssueListAPI(data) {
    return axios({
        url: `${api.issuePre}/historyIssues`,
        method: 'GET',
        params :data,
    })
}

export function getIssueAdviceAPI(data) {
    return axios({
        url: `${api.issuePre}/advice`,
        method: 'GET',
        params :data,
    })
}

// export function getIssueAdviceAPI(data){
//     return axios({
//         url: `${api.issuePre}/advice`,
//         method: 'POST',
//         data
//     })
// }

export function getRepoAllIssuesAPI(data) {
    return axios({
        url: `${api.issuePre}/repoIssue`,
        method: 'GET',
        params :data,
    })
}

export function saveRepoAllIssuesAPI(data) {
    return axios({
        url: `${api.issuePre}/storeRepoIssue`,
        method: 'GET',
        params :data,
    })
}

export function getIssueDetailByIdAPI(data) {
    return axios({
        url: `${api.issuePre}/get`,
        method: 'GET',
        params:data
    })
}

export function writeBackSingleAPI(data) {
    return axios({
        url: `${api.issuePre}/writeBackSingle`,
        method: 'GET',
        params:data
    })
}

export function writeBackAPI(data) {
    return axios({
        url: `${api.issuePre}/writeBack`,
        method: 'GET',
        params:data
    })
}


export function getBugLocationAPI(data) {
    return axios({
        url: `${api.issuePre}/getBugLocation`,
        method: 'GET',
        params:data,
    })
}

export function getAllIssueRelationAPI(data) {
    return axios({
        url: `${api.issuePre}/getAllIssueRelation`,
        method: 'GET',
        params:data,
    })
}

export function setRepoSingleIssueAPI(data) {
    return axios({
        url: `${api.issuePre}/setRepoSingleIssue?projectId=${data.id}`,
        method: 'POST',
        data:data.record,
        headers: {
            "Content-Type": "application/json",
        },
    })
}

//todo: data {projectId: ,page: }
//返回关键词node和边，注意classes
// let ele=[
//     {group:"nodes",data:{id:200,name:"keyword1; keyword2"},classes:"word"},
//     {group:"edges",data:{id:100,name:"关键词",source:120,target:200},classes:"relation2"}
//     ];
export function getKeywordsAPI(data) {
    return axios({
        url: `${api.issuePre}/getGraphModified`,
        method: 'GET',
        params:data,
    })
}
