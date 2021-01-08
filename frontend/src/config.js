let config = {};

if(process.env.NODE_ENV === "development")
{
    config.api = "http://localhost:8000";
}
else
{
    config.api = "http://161.35.134.82:8000";
}

export default config;