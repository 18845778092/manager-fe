//环境配置封装
const env=import.meta.env.MODE || 'prod'
const EnvConfig={
    dev:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/ee7e30ab030c86ad05061c2ff4c385f5/api'
    },
    test:{
        baseApi:'//test-futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/ee7e30ab030c86ad05061c2ff4c385f5/api'
    },
    prod:{
        baseApi:'//futurefe.com/api',
        mockApi:'https://www.fastmock.site/mock/ee7e30ab030c86ad05061c2ff4c385f5/api'
    }
}
export default{
    env,
    mock:true,
    ...EnvConfig[env]
}