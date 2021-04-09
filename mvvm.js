function hijack(data){
    if( typeof data !=='object') return
    for(let key of Object.keys(data)){
        let val=data[key]
        Object.defineProperty(data,key,{
            enumerable:true,
            configurable:false,
            get(){
                console.log('[hijack][get]->val:',val)
                return val
            },
            set(newVal){
                if(newVal===val) return
                console.log('[hijack][set]->newVal:',newVal)
                val=newVal
                input.value=newVal
                dispatchEvent.innerHTML=newVal
                hijack(newVal)

            }
        })
    }
}