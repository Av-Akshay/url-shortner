const sessionIdTOUserMap = new Map();

const setUser=(id,user)=>{
    sessionIdTOUserMap.set(id, user)
}
const getUser=(id)=>{
  return sessionIdTOUserMap.get(id)
};

module.exports= {setUser,getUser}