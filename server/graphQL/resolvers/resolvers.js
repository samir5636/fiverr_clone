const Freelancer = require('../schema/freelancer');
const Service = require('../schema/services');

const resolvers = {
    Query: {
      freelancers: async () => {//OK
          try {
            const allUsers = await Freelancer.find({});
            return allUsers;
          } catch (error) {
            console.log(error);
            return [];
          }
      },
      freelancerById: async (_, { id }) => {//OK
          try {
            const user = await Freelancer.findById(id);
            return user;
          } catch (err) {
            throw new Error(`Failed to fetch freelancer: ${err}`);
          }
        },
        freelancerLogin: async (_, { email, password }) => {
          return Freelancer.findOne({ email: email, password: password });
        },
        servicesOfFreelancer: async (_, { idfreelancer }) => {//OK
          try {
            const freelancerServices = await Service.find({idfreelancer: idfreelancer});
            return freelancerServices;
          } catch (error) {
            throw new Error(`Error : ${error}`);
          }
        },
    },
    Mutation: {
      createFreelancer: async (_, { username, email, password, country, phone, description }) => {
        // Check if a user with the same username or email already exists
        const existingUser = await Freelancer.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
          throw new Error('Freelancer already exists');
        }
        // Create and save the new user
        const user = new Freelancer({ username, email, password, country, phone, description });
        return user.save();
      },
      updateFreelancer: async (_, { id, username, email, password, country, phone, description }) => {//Ok
          try {
            const updatedUser = await Freelancer.findByIdAndUpdate(
              id,
              { username, email, password, country, phone, description },
              { new: true }
            );
            return updatedUser;
          } catch (err) {
            throw new Error(`Failed to update freelancer: ${err}`);
          }
        },
      deleteFreelancer: async (_, { id }) => {//OK
          try {
            const deletedUser = await Freelancer.findByIdAndRemove(id);
            return deletedUser;
          } catch (error) {
            throw new Error(`Failed to delete freelancer: ${error}`);
          }
        },
      createService: async (_,{title, subtitle, description, subdescription, category, delevrytime, price, idfreelancer})=>{
        const existingUser = await Freelancer.findById(idfreelancer);
        if (!existingUser) {
          throw new Error('Freelancer not exists');
        }
        const existingService = await Service.findOne({ $and: [{ title }, { idfreelancer }] });
        if (existingService) {
          throw new Error('Service already exists');
        }
        // Create and save the new user
        const service = new Service({ title, subtitle, description, subdescription, category, delevrytime, price, idfreelancer });
        return service.save();
      },
      updateService: async (_, { id, title, subtitle, description, subdescription, category, delevrytime, price, idfreelancer }) => {//Ok
        try {
          const updatedService = await Service.findByIdAndUpdate(
            id,
            { title, subtitle, description, subdescription, category, delevrytime, price },
            { new: true }
          );
          return updatedService;
        } catch (err) {
          throw new Error(`Failed to update freelancer: ${err}`);
        }
      },
      deleteService: async (_, { id }) => {//OK
        try {
          const deletedUser = await Service.findByIdAndRemove(id);
          return deletedUser;
        } catch (error) {
          throw new Error(`Failed to delete freelancer: ${error}`);
        }
      }
    },
  };

module.exports = resolvers;