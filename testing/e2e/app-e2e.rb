require 'capybara'
require 'capybara/dsl'
# require 'capybara/selenium'
# require 'capybara/angular'
require 'capybara/rspec'
require 'capybara/rspec/matcher_proxies'
require 'rspec/expectations'
require 'rails_helper'
require 'percy'
require 'selenium/webdriver'



# $:.each do |d|
#     p d 
# end 

# ENV.each {|k,v| puts "#{k}: #{v}"}  

module TestMod

  include Capybara
  include Capybara::DSL
  include Capybara::Selenium
  Capybara.app_host = 'http://localhost:4200'
  # monkey patch to avoid reset sessions
  class Capybara::Selenium::Driver < Capybara::Driver::Base
    def reset!
      if @browser
        @browser.navigate.to('about:blank')
      end
    end
  end
  
  config = Hash.new 
  config[:user] = ENV['LT_USERNAME']  
  config[:key] = ENV['LT_APIKEY'] 
  
  
   
  b = Capybara.register_driver :lambdatest do |app|
    # p app
    caps = {                       
      :browserName => "chrome",         
      :version => "76.0",         
      :platform =>  "win10",
      :name =>  "RSpec Sample Test",
      :build =>  "RSpec Selenium Sample",      
      :network =>  true,
      :visual =>  true,
      :video =>  true,
      :console =>  true,
      :tunnel =>true,
      :resolution => "1280x1024"
    } 
  
    a =Capybara::Selenium::Driver.new(
    app,
    :browser => :remote,
    :url => "https://#{config[:user]}:#{config[:key]}@hub.lambdatest.com/wd/hub",
    :desired_capabilities => caps
    )
    # puts a.class
    # puts a.options
    #  a.for(:remote,
    # :url => "https://#{config[:user]}:#{config[:key]}@hub.lambdatest.com/wd/hub",
    # :desired_capabilities => caps)
  end
  puts b
  

 

  # Capybara.default_driver = :lambdatest 
  Capybara.run_server = false  
  Capybara.default_driver = :selenium 
  # Capybara.default_driver = :chrome 
  # Capybara.javascript_driver = :chrome 
  # Capybara.current_driver = :chrome
  Capybara.app_host = 'http://localhost:4200'
  puts Capybara::Selenium

  # Capybara.app_host = "https://www.sortforyou.com"

  # Capybara.configure do |config|
  #   config.default_max_wait_time = 20
  # end
  
  def TestMod.startTest  
    @javascript
    RSpec.feature "navigation stuff" do
      scenario "Click on start button" do
        visit '/'
        elem = first ".p_a_n_e_l_ButtonText" 
        elem.select_option        
        expect(page).to have_selector '.p_a_n_e_l_Option';
      end 
      scenario "Options should toggle" do
        visit '/'
        elem = first ".p_a_n_e_l_ButtonText" 
        elem.select_option        
        learn_more = Hash.new
        Capybara.ignore_hidden_elements = false 
        options = all %{.p_a_n_e_l_Option}
        optCir = all %{.p_a_n_e_l_CircleOption}
        25.times do |r; i|
          i = rand(options.length)
          learn_more[:element] = optCir[i]
          learn_more[:background_color] = learn_more[:element].style   %{background-color}
          learn_more[:background_color_pre] = learn_more[:background_color][%{background-color}]  

          
          options[i].select_option


          learn_more[:background_color] = learn_more[:element].style   %{background-color}
          learn_more[:background_color_post] = learn_more[:background_color][%{background-color}] 
          expect(learn_more[:background_color_post]).not_to equal learn_more[:background_color_pre]           
        end 
        Capybara.ignore_hidden_elements = true
      end  
      scenario "Options should be counted in selection" do
        visit '/'
        elem = first ".p_a_n_e_l_ButtonText" 
        elem.select_option        
        learn_more = Hash.new
        Capybara.ignore_hidden_elements = false 
        options = all %{.p_a_n_e_l_Option}
        optCir = all %{.p_a_n_e_l_CircleOption}
        10.times do |r; i|
          i = rand(options.length)
          learn_more[:element] = optCir[i]
          learn_more[:background_color] = learn_more[:element].style   %{background-color}
          learn_more[:background_color_pre] = learn_more[:background_color][%{background-color}]  

          
          options[i].select_option


          learn_more[:background_color] = learn_more[:element].style   %{background-color}
          learn_more[:background_color_post] = learn_more[:background_color][%{background-color}] 
          expect(learn_more[:background_color_post]).not_to equal learn_more[:background_color_pre]           
        end 
        sleep 10
        my_symptoms = Array.new
        i = 0
        optCir.each do |r|
          b = r.style %{display}
          # p  r.style %{display}
          if b[%{display}]  == "block" then
            my_symptoms.push  options[i].text
            # p options[i].text
          end
          i = i + 1
        end
        Capybara.ignore_hidden_elements = true      
        button = first ".p_a_n_e_l_NextButton" 
        button.select_option
        sleep 10
        angular_symptoms = evaluate_script %Q{
           window.dgasdgasg
        }
        # p %{\n}
        # angular_symptoms.each do |k,v|
        #   p  v[%{text}]
        # end    
        # p %{\n}
        j = 0
        angular_symptoms.each do |k,v|
          p  v[%{text}]
          # p my_symptoms.include? v[%{text}]
          if my_symptoms.include? v[%{text}]  then
            j += 1
          else 
            p %{failed at #{v[%{text}] }}
            fail 
          end
        end 
        if my_symptoms.length != j  then 
          p %{failed at length  }
          fail
        end

      end    
                                
    end



    # RSpec.feature "visual regression debugging" do
    #   scenario "take a snapshot of the projects page", :js => true do
    #     visit '/'
    #     elem = first "#n_a_v_i_g_a_t_i_o_n_blogLink" 
    #     elem.select_option
    #     # Percy.snapshot page, { :name => 'windsor projects page', :widths=> [668, 1187, 1800] }
    #     page.current_window.resize_to 668, 800
    #     sleep 30       
    #     Percy.snapshot page, { :name => 'windsor projects page phone', :widths => [668] }
    #   end
    # end

 

    

  end


end
TestMod.startTest



=begin
  for navigation you must head to all the links
=end