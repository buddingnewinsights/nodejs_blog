const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {
    //  [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //  [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //  [POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/{{req.body.videoId}}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzgyn9ch4wv0yq6vH15C_vb030Uw`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    }
}

module.exports = new CourseController();
