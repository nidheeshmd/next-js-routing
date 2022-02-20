//catch all routes option of next.js
import { useRouter } from 'next/router';
function Doc(){
    const router = useRouter();
    const { params = [] } = router.query;
    console.log('...............', params);
    if(params.length === 2){
        return <h1>Docs for features {params[0]} and concept of {params[1]}</h1>
    }else if(params.length === 1){
        return <h1>Docs for features {params[0]} </h1>
    }
    return <h1>Docs page</h1>
}

export default Doc;