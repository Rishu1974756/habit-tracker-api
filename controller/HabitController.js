const Habit=require("../models/Habit");

exports.getHabits=async(req,res,next)=>{
    try{
        let query = {};

        if(req.query.type){
            query.type = req.query.type;
        }

        let habits = Habit.find(query);

        if(req.query.sort === "targetDays"){
            habits = habits.sort({ targetDays: 1 });
        }

        const result = await habits;
        res.status(200).json(result);
    } catch(err) {
       next(err);
    }
}

exports.gethabitbyid=async (req, res,next) => {
    try {
        const id = req.params.id;
        const habits = await Habit.findById(id);

        if (!habits) {
            return res.status(404).json({
                message: "Habit not found"
            });
        }

        res.status(200).json(habits);
    } catch(err) {
       next(err);
    }
}

exports.createHabit = async (req, res, next) => {
    try {
        const { habit, targetDays } = req.body;

        if (!habit || !habit.trim()) {
            return res.status(400).json({
                message: "Habit is required"
            });
        }

        if (targetDays === undefined || targetDays === null || targetDays === "") {
            return res.status(400).json({
                message: "targetDays is required"
            });
        }

        const newHabit = await Habit.create(req.body);

        return res.status(201).json(newHabit);
    } catch(err) {
        next(err);
    }
}

exports.updateHabit = async (req, res, next) => {
    try {
        const id = req.params.id;

        const habit = await Habit.findByIdAndUpdate(id, req.body, {
            returnDocument: "after", runValidators: true
        });

        if (!habit) {
            return res.status(404).json({
                message: "Habit not found"
            });
        }

        res.status(200).json(habit);
    } catch(err) {
        next(err);
    }
}

exports.deleteHabit = async (req, res, next) => {
    try {
        const id = req.params.id;

        const habit = await Habit.findByIdAndDelete(id);

        if (!habit) {
            return res.status(404).json({
                message: "Habit not found"
            });
        }

        res.status(200).json({
            message: "Habit deleted successfully"
        })
    } catch(err) {
        next(err);
    }
}