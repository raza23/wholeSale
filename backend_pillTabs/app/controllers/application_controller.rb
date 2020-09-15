class ApplicationController < ActionController::API
  
  def secret_key
      'm0d5'
  end

  def encode(payload)
    # byebug
      
    
    JWT.encode(payload,secret_key,'HS256')
    # byebug
    # jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
  end
 
  def decode(token)
    
    JWT.decode(token, secret_key,true,algorithm: 'HS256')[0]
    # byebug
    # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
    # [0] gives us the payload { "beef"=>"steak" }
  end
end

