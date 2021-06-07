package api.philoarte.leejunghyunshop.common.util;

import org.springframework.stereotype.Component;

import java.io.File;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.function.*;

@Component
public class Proxy {
    //public BiFunction<String,String, Integer> mySkip = (t, u) -> (integer.apply(t) - 1) * integer.apply(u);
    public Function<String, Object> intValue = Integer :: valueOf;
    public BiPredicate<String, String> equals = String :: equals;
    public BiFunction<Integer, Integer, Integer> random =(t, u)->(int)(Math.random()*(u-t))+t;
    public Function<Integer, int[]> intArr = int[] :: new;
    public static Supplier<LocalDate> today = () -> LocalDate.now();
    public Supplier<LocalTime> time = () -> LocalTime.now();
    public BiFunction<String,String, File> mkDir = File::new;
    public BiFunction<File,String, File> mkFile = File::new;
    //public Supplier<User> newUser = User::new;
    public Consumer<String> print = System.out::print;
    public Function<Object, String> string = String::valueOf;
    public Function<String, Integer> integer = Integer::parseInt;
    public Function<String, Integer> integerValue = Integer :: valueOf;


    public static Function<Double, Double> absDouble = Math::abs;
    public Function<Float, Float> absFloat = Math::abs;
    public Function<Integer, Integer> absInteger = Math::abs;
    public Function<Long, Long> absLong = Math::abs;

    public Function<Double, Double> ceil = Math::ceil;

    public Function<Double, Double> floor = Math::floor;

    public BiFunction<Double, Double, Double> maxDouble = Math::max;
    public BiFunction<Float, Float, Float> maxFloat = Math::max;
    public BiFunction<Integer, Integer, Integer> maxIntefer = Math::max;
    public BiFunction<Long, Long, Long> maxLong = Math::max;

    public BiFunction<Double, Double, Double> minDouble = Math::min;
    public BiFunction<Float, Float, Float> minFloat = Math::min;
    public BiFunction<Integer, Integer, Integer> minInteger = Math::min;
    public BiFunction<Long, Long, Long> minLong = Math::min;

    public Supplier<Double> supplierRandom = Math::random;

    public Function<Double, Double> rint = Math::rint;

    public Function<Double, Long> roundDouble = Math::round;
    //public Function<Long, Intger> roundFloat = Math::round;
}