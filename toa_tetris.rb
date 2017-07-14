require 'sinatra'

PIN_NUM = 27

set :public_folder, 'public'

get '/' do
  @value = check_pin(PIN_NUM)
  erb :triangle
end

get '/check' do
  {:state => check_pin(PIN_NUM)}.to_json
end

def check_pin(pin)
	[true, false].shuffle.first
end
