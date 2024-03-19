const Project = require('../modules/project/models');

const projects = {
    deleteProjectDetails: (req, res, next) => {
        const projectId = req.params.id;
        Project.Details.findByIdAndDelete(projectId, (err, data) => {
            if (err) {
                res.send(err.message);
            } else {
                next();
            }
        })
    },
    
    uploadProjectImage: (req, res, next) => {
        const client = s3Client;
        const params = uploadParams;
        
        params.Key = req.file.originalname;
        params.Body = req.file.buffer;
            
        client.upload(params, (err, data) => {
        	if (err) {
        		res.status(500).json({error:"Error -> " + err});
        	}
        	res.json('Project Image uploaded successfully');
        });
    },

    deleteProjectReview: (req, res, next) => {
        const projectId = req.params.id;
        Review.Comment.findByIdAndDelete(projectId, (err, data) => {
            if (err) {
                res.send(err.message);
            } else {
                next();
            }
        })
    }
};

module.exports = projects;