require 'sinatra'
#require 'rpi_gpio'

#PIN_NUM = 27

#RPi::GPIO.set_numbering :bcm
#RPi::GPIO.setup PIN_NUM, :as => :output, :initialize => :low


set :public_folder, 'public'

get '/' do
    #@value = checkPin(PIN_NUM)
    erb :triangle
end

#get '/check' do 
  #  {:state => checkPin(PIN_NUM)}.to_json   
#end

#def checkPin(pin)
 #   RPi::GPIO.high? pin
#end
