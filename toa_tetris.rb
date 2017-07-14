require 'sinatra'
require 'rpi_gpio'

PIN_NUM = 27

RPi::GPIO.set_numbering :bcm
RPi::GPIO.setup PIN_NUM, :as => :input

set :public_folder, 'public'

get '/' do
  @value = check_pin(PIN_NUM)
  erb :triangle
end

get '/check' do
  {:state => check_pin(PIN_NUM)}.to_json
end

def check_pin(pin)
  RPi::GPIO.high? pin
end
