import Link from "next/link";

const Footer = () => (
    <footer className="bg-black pt-24 pb-12 border-t border-white/10" id="contacts">
        <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
                <div className="col-span-2">
                    <h2 className="font-serif text-3xl text-gold-500 mb-6">Премия &quot;Кейтеринг года&quot;</h2>
                    <p className="text-neutral-500 text-sm leading-relaxed max-w-md">
                        Независимая профессиональная премия, отмечающая лучшие компании в сфере выездного ресторанного обслуживания.
                    </p>
                </div>

                <div>
                    <h4 className="text-white text-xs uppercase tracking-widest mb-6">Навигация</h4>
                    <ul className="space-y-4 text-sm text-neutral-400">
                        {/* <li><Link href="#about" className="hover:text-gold-400 transition-colors">О премии</Link></li> */}
                        <li><Link href="#winners" className="hover:text-gold-400 transition-colors">Победители</Link></li>
                        <li><Link href="#gallery" className="hover:text-gold-400 transition-colors">Фотоархив</Link></li>
                        {/* <li><Link href="#contacts" className="hover:text-gold-400 transition-colors">Контакты</Link></li> */}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-xs uppercase tracking-widest mb-6">Контакты</h4>
                    <ul className="space-y-4 text-sm text-neutral-400">
                        {/* <li><Link href="tel:+79778922353" className="hover:text-gold-400 transition-colors">+7 (977) 892-23-53</Link></li> */}
                        <li><Link href="mailto:info@cateringconsulting.ru" className="hover:text-gold-400 transition-colors">info@cateringconsulting.ru</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 gap-4">
                <p>© {new Date().getFullYear()} Премия &quot;Кейтеринг года&quot;. Все права защищены.</p>
            </div>
        </div>
    </footer>
);

export default Footer;