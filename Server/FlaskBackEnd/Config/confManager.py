import configparser


class Config():
    config = None
    def __init__(self):
        self.config = configparser.ConfigParser()
        self.config.read("Config/config.ini")

    # get all sections
    def getAllSections(self):
        print('[Config Manager] \t Getting all sections .')
        return self.config.sections()

    # get all config values in a section
    def getAllOptions(self, section):
        print('[Config Manager] \t Getting '+section+' .')
        return self.config.options(section)

    # get config value by section and option
    def getConfig(self, section,status):
        print('[Config Manager] \t Getting '+status+'  from '+section+' .')
        return self.config.get(section,status)