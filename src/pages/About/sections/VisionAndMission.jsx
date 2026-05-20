import VisionAndMissionSkeleton from "@/components/Loading/SkeletonLoading/VisionAndMissionSkeleton";

const VisionAndMission = ({
  vision = {},
  mission = {},
  trainings = {},
  loading,
}) => {
  if (loading) return <VisionAndMissionSkeleton />;

  if (!vision || !mission) return null;

  const list = [
    {
      id: 1,
      title: vision?.title,
      description: vision?.description,
      icon: vision?.icon,
      value: vision,
    },
    {
      id: 2,
      title: mission?.title,
      description: mission?.description,
      icon: mission?.icon,
      value: mission,
    },
    {
      id: 3,
      title: trainings?.title,
      description: trainings?.description,
      icon: trainings?.icon,
      value: trainings,
    },
  ];

  return (
    <section className="sectionPadding">
      <div className="container">
        <div className="flex flex-col gap-8 mt-8">
          {list
            ?.filter((item) => item.value)
            .map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row even:md:flex-row-reverse gap-2 md:gap-8 items-center not-last:pb-8 not-last:border-b-2"
              >
                <div className="bg-primary-foreground w-full md:w-1/2 aspect-5/3 rounded-xl overflow-hidden shadow-xl">
                  <img
                    loading="lazy"
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center md:text-start md:items-start gap-2 lg:gap-4">
                  <h3 className="text-3xl font-medium">{item.title}</h3>

                  <p className="">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;

//  <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-8">
//    {list
//      ?.filter((item) => item.value)
//      .map((item) => (
//        <div
//          key={item.id}
//          className="p-4 rounded-xl border flex-1 min-w-62 md:min-w-75
//               flex flex-col items-center text-center md:text-start md:items-start gap-2"
//        >
//          <div className="bg-primary-foreground w-full aspect-5/3 rounded-lg overflow-hidden">
//            <img
//              loading="lazy"
//              src={item.icon}
//              alt={item.title}
//              className="w-full h-full object-cover"
//            />
//          </div>

//          <h3 className="text-2xl font-medium">{item.title}</h3>

//          <p className="">{item.description}</p>
//        </div>
//      ))}
//  </div>
