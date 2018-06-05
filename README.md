# dymo-label-print
code to print labels for internal or external hard drives with javascript and applescript

smartmontools is required for this to work, it uses smartctl to get all the info for the connected drives. 

smartmontools is easy to install with homebrew, if you dont already have homebrew it can be installed with the following command in Terminal:
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

once homebrew is installed run the following code in Terminal to install smartmontools:
brew install smartmontools
